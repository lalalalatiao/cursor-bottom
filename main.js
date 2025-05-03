'use strict';

var obsidian = require('obsidian');

class CursorBottomPlugin extends obsidian.Plugin {
    async onload() {
        // 注册命令，可通过命令面板调用 (Register the command for command palette)
        this.addCommand({
            id: 'move-cursor-to-bottom',
            name: 'Move cursor to bottom / 移动光标到文档底部',
            editorCallback: (editor) => {
                // 获取文档最后一行 (Get the last line of the document)
                const lastLine = editor.lastLine();
                // 将光标移动到最后一行的末尾 (Move cursor to the end of the last line)
                editor.setCursor({ line: lastLine, ch: editor.getLine(lastLine).length });
            }
        });

        // 添加快捷键设置 (Add settings tab)
        this.addSettingTab(new CursorBottomSettingTab(this.app, this));
    }

    onunload() {
        // 插件卸载时的清理工作 (Cleanup when the plugin is disabled)
    }
}

class CursorBottomSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const {containerEl} = this;

        containerEl.empty();

        containerEl.createEl('h2', {text: 'Cursor Bottom - Settings / 光标到底部 - 设置'});

        new obsidian.Setting(containerEl)
            .setName('Usage / 使用说明')
            .setDesc('You can set a hotkey for the "Move cursor to bottom" command in Obsidian\'s Hotkeys settings. / 你可以在Obsidian的热键设置中为"移动光标到文档底部"命令设置快捷键。');
    }
}

module.exports = CursorBottomPlugin; 