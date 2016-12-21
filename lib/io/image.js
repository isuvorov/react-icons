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

var IoImage = function (_React$Component) {
    _inherits(IoImage, _React$Component);

    function IoImage() {
        _classCallCheck(this, IoImage);

        return _possibleConstructorReturn(this, (IoImage.__proto__ || Object.getPrototypeOf(IoImage)).apply(this, arguments));
    }

    _createClass(IoImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.3 17.5c-2.1 0-3.8-1.7-3.8-3.7s1.7-3.8 3.8-3.8 3.7 1.7 3.7 3.8-1.7 3.7-3.7 3.7z m6.5-12.5c1.3 0 2.2 0.9 2.2 2.2v25.6c0 1.3-0.9 2.2-2.2 2.2h-30.6c-1.3 0-2.2-0.9-2.2-2.2v-25.6c0-1.3 0.9-2.2 2.2-2.2h30.6z m-8 15.5l7.7 8.3v-20.4c0-0.5-0.5-0.9-1-0.9h-28c-0.5 0-0.9 0.4-1 0.9v20.4l9.8-11.9c0.4-0.3 0.8-0.6 1.4-0.6s1 0.1 1.3 0.5l4.2 4.6 0.3 0.3c0.3 0.2 0.6 0.3 0.9 0.3s0.6-0.1 0.9-0.4l1.4-1.2c0.3-0.2 0.7-0.4 1.1-0.4s0.7 0.2 1 0.5z' })
                )
            );
        }
    }]);

    return IoImage;
}(React.Component);

exports.default = IoImage;
module.exports = exports['default'];