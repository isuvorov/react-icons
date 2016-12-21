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

var MdBorderColor = function (_React$Component) {
    _inherits(MdBorderColor, _React$Component);

    function MdBorderColor() {
        _classCallCheck(this, MdBorderColor);

        return _possibleConstructorReturn(this, (MdBorderColor.__proto__ || Object.getPrototypeOf(MdBorderColor)).apply(this, arguments));
    }

    _createClass(MdBorderColor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 33.4h40v6.6h-40v-6.6z m34.5-26.7l-3.2 3.3-6.3-6.2 3.3-3.3c0.6-0.7 1.7-0.7 2.3 0l3.9 3.9c0.7 0.6 0.7 1.7 0 2.3z m-4.9 4.9l-16.7 16.8h-6.3v-6.3l16.8-16.7z' })
                )
            );
        }
    }]);

    return MdBorderColor;
}(React.Component);

exports.default = MdBorderColor;
module.exports = exports['default'];