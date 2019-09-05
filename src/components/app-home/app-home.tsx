import { Component, Element, h, State } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @Element()
  element: HTMLStencilElement;

  private cacheQS = new Date().getTime() + '';

  @State()
  private mode = 'input';

  @State()
  private urls: string;

  @State()
  private urlList: string[];

  @State()
  private checkPos: number;

  @State()
  private results: { url: string; time: Date; err: boolean }[];

  render() {
    return (
      <div class="app-home">
        <header>
          <h1>Image URL Cheker</h1>
        </header>
        {this.mode == 'input' && this.renderInput()}
        {this.mode != 'input' && this.renderProcess()}
      </div>
    );
  }

  private start = () => {
    if (!this.urls) {
      return;
    }

    const list = new Set<string>();
    for (let s of this.urls.split(/[\r\n]+/)) {
      s = s.trim();
      if (s) {
        list.add(s);
      }
    }

    if (list.size == 0) {
      return;
    }

    this.urlList = [...list];
    this.checkPos = 0;
    this.results = [];
    this.mode = 'check';
  };

  private renderInput = () => {
    return [
      <div class="urls-box">
        <textarea
          class="textarea"
          placeholder="Input image urls ..."
          onInput={event => {
            this.urls = (event.target as HTMLInputElement).value.trim();
          }}
          value={this.urls}
        ></textarea>
      </div>,
      <div class="start-box">
        <button
          class="button large is-primary"
          disabled={!this.urls}
          onClick={() => {
            this.start();
          }}
        >
          START
        </button>
      </div>
    ];
  };

  private imgSuccess = (err: boolean) => {
    const url = this.urlList[this.checkPos];
    this.results.push({ url: url, time: new Date(), err: err });
    if (this.checkPos == this.urlList.length - 1) {
      this.mode = 'end';
    } else {
      this.checkPos++;
    }
  };

  private download = () => {
    let csv = 'URL,STATUS\r\n';
    for (const result of this.results) {
      const status = result.err ? 'ERROR' : 'OK';
      csv += `${result.url},${status}\r\n`;
    }
    const blob = new Blob([csv], { type: 'text/plain' });

    const anchor = this.element
      .querySelector('.download-box')
      .querySelector('a');

    anchor.download = 'imageurls.csv';
    anchor.href = URL.createObjectURL(blob);
    anchor.click();
  };

  private renderProcess = () => {
    const url = this.urlList[this.checkPos];
    let imgURL = '';
    let msg = '';
    if (this.mode == 'check') {
      imgURL = url;
      if (imgURL.indexOf('?') < 0) {
        imgURL += '?' + this.cacheQS;
      } else {
        imgURL += '&' + this.cacheQS;
      }

      msg = url;
    }

    const renderImgBox = () => {
      if (imgURL) {
        return (
          <img
            src={imgURL}
            onLoad={() => {
              this.imgSuccess(false);
            }}
            onError={() => {
              this.imgSuccess(true);
            }}
          ></img>
        );
      }

      const resultRows = [];
      let i = 0;
      for (const result of this.results) {
        resultRows.push(
          <tr>
            <td>{result.url}</td>
            <td>{result.err ? 'ERROR' : 'OK'}</td>
          </tr>
        );
        i++;
        if (i > 1000) {
          resultRows.push(
            <tr>
              <td class="has-text-centered" colSpan={2}>
                <div>&#65049;</div>
                <div class="has-text-danger">PLEASE DOWNLOAD RESULTS</div>
              </td>
            </tr>
          );
          break;
        }
      }
      return [
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>URL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>{resultRows}</tbody>
        </table>
      ];
    };

    return [
      <div class="img-box">{renderImgBox()}</div>,
      <div class="progress-box">
        <progress
          class="progress is-primary"
          value={this.checkPos + 1}
          max={this.urlList.length}
        ></progress>
        <div class="msg-box">
          <span class="msg">{msg}</span>
          <span>
            {this.checkPos + 1}/{this.urlList.length}
          </span>
        </div>
      </div>,
      <div class="download-box">
        <button
          class="button is-success"
          onClick={() => {
            this.download();
          }}
        >
          DOWNLOAD RESULTS(CSV)
        </button>
        <a></a>
      </div>,
      <div class="back-box">
        <button
          class="button is-light"
          onClick={() => {
            this.mode = 'input';
          }}
        >
          BACK
        </button>
      </div>
    ];
  };
}
