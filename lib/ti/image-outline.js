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

var TiImageOutline = function (_React$Component) {
    _inherits(TiImageOutline, _React$Component);

    function TiImageOutline() {
        _classCallCheck(this, TiImageOutline);

        return _possibleConstructorReturn(this, (TiImageOutline.__proto__ || Object.getPrototypeOf(TiImageOutline)).apply(this, arguments));
    }

    _createClass(TiImageOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.2 13.3c1.3 0 2.5 1.2 2.5 2.5s-1.2 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m0-1.6c-2.3 0-4.2 1.8-4.2 4.1s1.9 4.2 4.2 4.2 4.1-1.9 4.1-4.2-1.8-4.1-4.1-4.1z m12.5 8.3c0.7 0.1 2.1 3 2.9 6.7h-19c0.8-1.8 1.8-3.4 2.7-3.4 1.4 0 1.9 0.3 2.6 0.7 0.7 0.5 1.7 1 3.3 1 1.9 0 3.2-1.5 4.4-2.8 1-1.1 2-2.2 3.1-2.2z m0-1.7c-3.4 0-5 5-7.5 5s-2.5-1.6-5.9-1.6c-3.3 0-5 6.6-5 6.6h23.4s-1.7-10-5-10z m10-8.3c0-1.8-1.5-3.3-3.4-3.3h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20z m-3.4 20h-26.6v-20h26.6l0 20z' })
                )
            );
        }
    }]);

    return TiImageOutline;
}(React.Component);

exports.default = TiImageOutline;
module.exports = exports['default'];