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

var TiMessages = function (_React$Component) {
    _inherits(TiMessages, _React$Component);

    function TiMessages() {
        _classCallCheck(this, TiMessages);

        return _possibleConstructorReturn(this, (TiMessages.__proto__ || Object.getPrototypeOf(TiMessages)).apply(this, arguments));
    }

    _createClass(TiMessages, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 11.7h-5c0-2.8-2.2-5-5-5h-20c-2.7 0-5 2.2-5 5v11.6c0 2.8 2.3 5 5 5v5l5-5c0 2.8 2.3 5 5 5h13.3l5 5v-5h1.7c2.8 0 5-2.2 5-5v-11.6c0-2.8-2.2-5-5-5z m-30 13.3c-0.9 0-1.7-0.8-1.7-1.7v-11.6c0-0.9 0.8-1.7 1.7-1.7h20c0.9 0 1.7 0.8 1.7 1.7v1.6h-10.9c-2.3 0-4.1 1.9-4.1 4.2v7.5h-6.7z m31.7 3.3c0 0.9-0.8 1.7-1.7 1.7h-20c-0.9 0-1.7-0.8-1.7-1.7v-10.8c0-1.4 1.2-2.5 2.5-2.5h19.2c0.9 0 1.7 0.8 1.7 1.7v11.6z' })
                )
            );
        }
    }]);

    return TiMessages;
}(React.Component);

exports.default = TiMessages;
module.exports = exports['default'];