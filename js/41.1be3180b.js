(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{680:function(n,e){n.exports='# FilePicker 文件选择器\n\n\n\n## 基本用法\n```jsx\nimport { Cell, FilePicker, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      files: [],\n    };\n  }\n\n  onSelect(file) {\n    console.log(file);\n    const { files } = this.state;\n    files.push(file);\n\n    this.setState({\n      files,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        {this.state.files.map((item, index) => <Cell key={+index}>{item.fileName}</Cell>)}\n        <div className="file-picker-wrapper">\n          <FilePicker\n            className="file-picker-btn"\n            onChange={selected => this.onSelect(selected)}\n          >\n            <Icon type="add" size="lg" />\n          </FilePicker>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多选模式\n```jsx\nimport { Cell, FilePicker, Icon, Toast, Badge } from \'zarm\';\n\nconst MAX_FILES_COUNT = 5;\n\nfunction onBeforeSelect() {\n  alert(\'执行 onBeforeSelect 方法\');\n}\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      files: [],\n    };\n  }\n\n  onSelect(selFiles) {\n    let { files } = this.state;\n    files = files.concat(selFiles);\n    if (files.length > MAX_FILES_COUNT) {\n      Toast.show(\'最多只能选择5张图片\')\n      return;\n    }\n    this.setState({ files });\n  }\n\n  remove(index) {\n    const { files } = this.state;\n    files.splice(index, 1);\n    this.setState({ files });\n    Toast.show(\'删除成功\');\n  }\n\n  imgRender() {\n    const { files } = this.state;\n\n    return files.map((item, index) => {\n      return (\n        <Badge\n          key={+index}\n          sup\n          className="file-picker-item"\n          shape="circle"\n          text={<Icon type="wrong-round-fill" size="sm" theme="danger" />}\n          onClick={() => this.remove(index)}\n        >\n          <div className="file-picker-item-img">\n            <a href={item.thumbnail} target="_blank" rel="noopener noreferrer">\n              <img src={item.thumbnail} alt="" />\n            </a>\n          </div>\n        </Badge>\n      );\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className="file-picker-wrapper">\n          {this.imgRender()}\n          {\n            (this.state.files.length < MAX_FILES_COUNT) && (\n              <FilePicker\n                multiple\n                className="file-picker-btn"\n                accept="image/*"\n                onBeforeSelect={onBeforeSelect}\n                onChange={selected => this.onSelect(selected)}\n              >\n                <Icon type="add" size="lg" />\n              </FilePicker>\n            )\n          }\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 禁用状态\n```jsx\nimport { FilePicker, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="file-picker-wrapper">\n        <FilePicker className="file-picker-btn" disabled>\n          <Icon type="add" size="lg" />\n        </FilePicker>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| accept | string | - | 允许上传的附件格式 |\n| capture | string | - | 唤起的原生应用，可选值：照相机`camera`, 摄像机`camcorder`, 录音`microphone` |\n| multiple | boolean | false | 是否多选 |\n| disabled | boolean | false | 是否禁用 |\n| onBeforeSelect | () => boolean | () => true | 选择前触发的事件 |\n| onChange | (file?: object \\| object[]) => void | - | 值变化时触发的回调函数 |'}}]);