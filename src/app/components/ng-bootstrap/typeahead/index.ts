import { NgbdTypeaheadFormat } from "./format/typeahead-format";
import { NgbdTypeaheadHttp } from "./http/typeahead-http";
import { NgbdTypeaheadBasic } from "./basic/typeahead-basic";
import { NgbdTypeaheadFocus } from "./focus/typeahead-focus";
import { NgbdTypeaheadDiagnosis } from "./diagnosis/typeahead-focus";
import { NgbdTypeaheadTemplate } from "./template/typeahead-template";
import { NgbdTypeaheadConfig } from "./config/typeahead-config";

export const TYPEAHEAD_DIRECTIVES = [
  NgbdTypeaheadFormat,
  NgbdTypeaheadHttp,
  NgbdTypeaheadBasic,
  NgbdTypeaheadFocus,
  NgbdTypeaheadDiagnosis,
  NgbdTypeaheadTemplate,
  NgbdTypeaheadConfig
];
