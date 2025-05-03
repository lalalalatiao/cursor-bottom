import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class BottomCursorPlugin extends Plugin {
	async onload() {
		// 注册命令，可通过命令面板调用
		this.addCommand({
			id: 'move-cursor-to-bottom',
			name: '移动光标到文档底部',
			editorCallback: (editor: Editor) => {
				// 获取文档最后一行
				const lastLine = editor.lastLine();
				// 将光标移动到最后一行的末尾
				editor.setCursor({ line: lastLine, ch: editor.getLine(lastLine).length });
			}
		});

		// 添加快捷键设置
		this.addSettingTab(new BottomCursorSettingTab(this.app, this));
	}

	onunload() {
		// 插件卸载时的清理工作
	}
}

class BottomCursorSettingTab extends PluginSettingTab {
	plugin: BottomCursorPlugin;

	constructor(app: App, plugin: BottomCursorPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: '一键底部 - 设置'});

		new Setting(containerEl)
			.setName('使用说明')
			.setDesc('你可以在Obsidian的热键设置中为"移动光标到文档底部"命令设置快捷键。');
	}
} 