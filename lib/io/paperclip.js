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

var IoPaperclip = function (_React$Component) {
    _inherits(IoPaperclip, _React$Component);

    function IoPaperclip() {
        _classCallCheck(this, IoPaperclip);

        return _possibleConstructorReturn(this, (IoPaperclip.__proto__ || Object.getPrototypeOf(IoPaperclip)).apply(this, arguments));
    }

    _createClass(IoPaperclip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.1 12.1c0.5 0 0.9 0.4 0.9 0.9v15.3c0 2.2-0.8 3.8-1.9 4.9-1.1 1.2-2.8 1.8-4.3 1.8-3.2 0-6.3-2.4-6.3-6.9v-18.3c0-1.8 0.9-3.4 2.3-4.2s3-0.8 4.4 0 2.3 2.4 2.3 4.2l-0.1 17.6c0 1-0.2 1.9-0.7 2.5s-1.2 1-1.9 1c-1.4 0-2.7-1.2-2.7-3.5v-13.5c0-0.5 0.5-0.9 0.9-0.9s0.9 0.4 0.9 0.9v13.5c0 1.1 0.4 1.7 0.9 1.7 0.1 0 0.3-0.2 0.5-0.3 0.2-0.4 0.4-0.8 0.4-1.4v-17.6c0-1.1-0.5-2.1-1.3-2.6s-1.9-0.5-2.8 0-1.3 1.5-1.3 2.6v18.3c0 3.5 2.3 5 4.5 5s4.4-1.5 4.4-4.9v-15.2c0-0.5 0.5-0.9 0.9-0.9z' })
                )
            );
        }
    }]);

    return IoPaperclip;
}(React.Component);

exports.default = IoPaperclip;
module.exports = exports['default'];