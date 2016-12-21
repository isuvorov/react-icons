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

var TiClipboard = function (_React$Component) {
    _inherits(TiClipboard, _React$Component);

    function TiClipboard() {
        _classCallCheck(this, TiClipboard);

        return _possibleConstructorReturn(this, (TiClipboard.__proto__ || Object.getPrototypeOf(TiClipboard)).apply(this, arguments));
    }

    _createClass(TiClipboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 5h-16.6c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h16.6c2.8 0 5-2.2 5-5v-20c0-2.8-2.2-5-5-5z m-13.3 3.3h10v1.7c0 0.9-0.7 1.7-1.7 1.7h-6.6c-1 0-1.7-0.8-1.7-1.7v-1.7z m15 21.7c0 0.9-0.7 1.7-1.7 1.7h-16.6c-1 0-1.7-0.8-1.7-1.7v-20c0-0.9 0.7-1.7 1.7-1.7h1.6v1.7c0 1.8 1.5 3.3 3.4 3.3h6.6c1.9 0 3.4-1.5 3.4-3.3v-1.7h1.6c1 0 1.7 0.8 1.7 1.7v20z m-3.3-1.7h-13.4c-0.4 0-0.8-0.3-0.8-0.8s0.4-0.8 0.8-0.8h13.4c0.4 0 0.8 0.3 0.8 0.8s-0.4 0.8-0.8 0.8z m0-5h-13.4c-0.4 0-0.8-0.3-0.8-0.8s0.4-0.8 0.8-0.8h13.4c0.4 0 0.8 0.3 0.8 0.8s-0.4 0.8-0.8 0.8z m0-5h-13.4c-0.4 0-0.8-0.3-0.8-0.8s0.4-0.8 0.8-0.8h13.4c0.4 0 0.8 0.3 0.8 0.8s-0.4 0.8-0.8 0.8z' })
                )
            );
        }
    }]);

    return TiClipboard;
}(React.Component);

exports.default = TiClipboard;
module.exports = exports['default'];