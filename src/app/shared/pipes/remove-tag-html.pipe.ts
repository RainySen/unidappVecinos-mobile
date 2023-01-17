import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTagHtml'
})
export class RemoveTagHtmlPipe implements PipeTransform {

  transform(str: string): unknown {
    console.log('value', str);
    if ((str===null) || (str==='')) return false;

    str = str.toString();
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    str = str.replace( '&nbsp;', ' ');
    return str.replace( /(<([^>]+)>)/ig, '');
  }

}
