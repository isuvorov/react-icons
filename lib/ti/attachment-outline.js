'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiAttachmentOutline = function (_React$Component) {
    _inherits(TiAttachmentOutline, _React$Component);

    function TiAttachmentOutline() {
        _classCallCheck(this, TiAttachmentOutline);

        return _possibleConstructorReturn(this, (TiAttachmentOutline.__proto__ || Object.getPrototypeOf(TiAttachmentOutline)).apply(this, arguments));
    }

    _createClass(TiAttachmentOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 7.4c1.7 0 3.4 0.7 4.7 2 2.6 2.6 2.6 6.8 0 9.4l-11.8 11.8c-1.3 1.3-3 2-4.7 2s-3.4-0.7-4.7-2c-2.6-2.6-2.6-6.8 0-9.4l1.3-1.4c0 1.4 0.5 2.6 1.2 3.6l-0.2 0.1c-1.3 1.3-1.3 3.4 0 4.7 0.7 0.7 1.6 1 2.4 1s1.7-0.3 2.4-1l11.8-11.7c1.2-1.3 1.2-3.5 0-4.8-0.7-0.6-1.6-0.9-2.4-0.9-0.9 0-1.7 0.3-2.4 0.9l-7.5 7.6c-0.2 0.2-0.3 0.5-0.3 0.6 0 0.1 0.1 0.4 0.3 0.6 0.1 0.2 0.4 0.2 0.6 0.2 0.2 0 0.4 0 0.6-0.2l5.8-5.9c0.7 0.7 1 1.5 1 2.4 0 0.8-0.3 1.7-0.9 2.3-0.1 0-3.6 3.5-3.6 3.5-0.8 0.9-1.9 1.3-2.9 1.3s-2.2-0.4-3-1.3c-0.8-0.7-1.2-1.8-1.2-2.9 0-1.1 0.4-2.2 1.2-3l7.6-7.5c1.3-1.3 3-2 4.7-2z m0-3.3c-2.7 0-5.2 1-7.1 2.9l-11.8 11.8c-1.8 1.9-2.9 4.4-2.9 7.1s1.1 5.2 2.9 7.1c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l11.8-11.8c1.9-1.9 2.9-4.4 2.9-7.1 0-2.7-1-5.2-2.9-7.1-1.9-1.9-4.4-2.9-7.1-2.9z' })
                )
            );
        }
    }]);

    return TiAttachmentOutline;
}(React.Component);

exports.default = TiAttachmentOutline;
module.exports = exports['default'];