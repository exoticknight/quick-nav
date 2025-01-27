import type { Modifier } from "obsidian";
import type { Command } from "@codemirror/view";
import {
	cursorCharLeft,
	cursorCharRight,
	cursorLineDown,
	cursorLineUp,
	cursorPageDown,
	cursorPageUp,
	cursorLineBoundaryLeft,
	cursorLineBoundaryRight,
} from "@codemirror/commands";
import { Platform } from "src/constraints";

export const CursorMove: {
	id: string;
	name: string;
	modifiers: {
		[Platform.Windows]: Modifier[];
		[Platform.MacOS]: Modifier[];
		[Platform.Linux]: Modifier[];
	};
	key: string;
	commandFn: Command;
}[] = [
	{
		id: "quick-nav-move-cursor-up",
		name: "Move Cursor Up",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "I",
		commandFn: cursorLineUp,
	},
	{
		id: "quick-nav-move-cursor-down",
		name: "Move Cursor Down",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "K",
		commandFn: cursorLineDown,
	},
	{
		id: "quick-nav-move-cursor-left",
		name: "Move Cursor Left",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "J",
		commandFn: cursorCharLeft,
	},
	{
		id: "quick-nav-move-cursor-right",
		name: "Move Cursor Right",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "L",
		commandFn: cursorCharRight,
	},
	{
		id: "quick-nav-move-cursor-page-up",
		name: "Move Cursor Page Up",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "U",
		commandFn: cursorPageUp,
	},
	{
		id: "quick-nav-move-cursor-page-down",
		name: "Move Cursor Page Down",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "O",
		commandFn: cursorPageDown,
	},
	{
		id: "quick-nav-move-cursor-left-end",
		name: "Move Cursor Left End",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: "H",
		commandFn: cursorLineBoundaryLeft,
	},
	{
		id: "quick-nav-move-cursor-right-end",
		name: "Move Cursor Right End",
		modifiers: {
			[Platform.Windows]: ["Alt"],
			[Platform.MacOS]: ["Ctrl"],
			[Platform.Linux]: ["Alt"],
		},
		key: ";",
		commandFn: cursorLineBoundaryRight,
	},
];
