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

var IoDocument = function (_React$Component) {
    _inherits(IoDocument, _React$Component);

    function IoDocument() {
        _classCallCheck(this, IoDocument);

        return _possibleConstructorReturn(this, (IoDocument.__proto__ || Object.getPrototypeOf(IoDocument)).apply(this, arguments));
    }

    _createClass(IoDocument, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.9 13.2c0.1 0.2 0.1 0.4 0.1 0.7v19.1c0 1-0.7 2-1.6 2h-19c-1 0-1.9-1-1.9-2v-26.2c0-1 0.9-1.8 1.9-1.8h12.5c0.2 0 0.4 0 0.7 0.2 0.1 0 0.4 0.1 0.5 0.3l6.5 7.2c0.2 0.1 0.2 0.3 0.3 0.5z m-7.3-4.5v4.9h4.5z m-12.6 23.8h17.5v-16.4h-5.2c-1.2 0-2.2-1-2.2-2.2v-6.4h-10.1v25z' })
                )
            );
        }
    }]);

    return IoDocument;
}(React.Component);

exports.default = IoDocument;
module.exports = exports['default'];