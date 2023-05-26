import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// pintura
import {
  // editor
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
} from '@pqina/pintura';

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // editor generic state
  editorOptions: any = {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    shapePreprocessor: createDefaultShapePreprocessor(),
    ...plugin_finetune_defaults,
    ...plugin_filter_defaults,
    ...markup_editor_defaults,
    locale: {
      ...locale_en_gb,
      ...plugin_crop_locale_en_gb,
      ...plugin_finetune_locale_en_gb,
      ...plugin_filter_locale_en_gb,
      ...plugin_annotate_locale_en_gb,
      ...markup_editor_locale_en_gb,
    },
  };

  // inline
  inlineSrc = 'assets/image.jpeg';
  inlineResult: string;

  constructor(private sanitizer: DomSanitizer) {}

  handleInlineLoad($event) {
    console.log('inline load', $event);
  }

  handleInlineProcess($event) {
    console.log('inline process', $event);
    const objectURL = URL.createObjectURL($event.dest);
    this.inlineResult = this.sanitizer.bypassSecurityTrustResourceUrl(
      objectURL
    ) as string;
  }
}
