import type { Modifier } from "obsidian";
import type { Command } from "@codemirror/view";
import {
	selectCharLeft,
	selectCharRight,
	selectLineDown,
	selectLineUp,
	selectLineBoundaryLeft,
	selectLineBoundaryRight,
} from "@codemirror/commands";
import { Platform } from "src/constraints";

export const CursorSelect: {
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
		id: "quick-nav-select-cursor-up",
		name: "Select Cursor Up",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: "I",
		commandFn: selectLineUp,
	},
	{
		id: "quick-nav-select-cursor-down",
		name: "Select Cursor Down",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: "K",
		commandFn: selectLineDown,
	},
	{
		id: "quick-nav-select-cursor-left",
		name: "Select Cursor Left",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: "J",
		commandFn: selectCharLeft,
	},
	{
		id: "quick-nav-select-cursor-right",
		name: "Select Cursor Right",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: "L",
		commandFn: selectCharRight,
	},
	{
		id: "quick-nav-select-cursor-left-end",
		name: "Select Cursor Left End",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: "H",
		commandFn: selectLineBoundaryLeft,
	},
	{
		id: "quick-nav-select-cursor-right-end",
		name: "Select Cursor Right End",
		modifiers: {
			[Platform.Windows]: ["Alt", "Shift"],
			[Platform.MacOS]: ["Ctrl", "Shift"],
			[Platform.Linux]: ["Alt", "Shift"],
		},
		key: ";",
		commandFn: selectLineBoundaryRight,
	},
];
