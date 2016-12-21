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

var MdInvertColors = function (_React$Component) {
    _inherits(MdInvertColors, _React$Component);

    function MdInvertColors() {
        _classCallCheck(this, MdInvertColors);

        return _possibleConstructorReturn(this, (MdInvertColors.__proto__ || Object.getPrototypeOf(MdInvertColors)).apply(this, arguments));
    }

    _createClass(MdInvertColors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 32.7v-24.2l-7 7.1c-1.9 1.8-3 4.4-3 7.1 0 5.3 4.6 10 10 10z m9.5-19.5c5.2 5.2 5.2 13.6 0 18.8-2.6 2.6-6.1 3.9-9.5 3.9s-6.9-1.3-9.5-3.9c-5.2-5.2-5.2-13.6 0-18.8l9.5-9.4z' })
                )
            );
        }
    }]);

    return MdInvertColors;
}(React.Component);

exports.default = MdInvertColors;
module.exports = exports['default'];