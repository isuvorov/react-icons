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

var MdInvertColorsOn = function (_React$Component) {
    _inherits(MdInvertColorsOn, _React$Component);

    function MdInvertColorsOn() {
        _classCallCheck(this, MdInvertColorsOn);

        return _possibleConstructorReturn(this, (MdInvertColorsOn.__proto__ || Object.getPrototypeOf(MdInvertColorsOn)).apply(this, arguments));
    }

    _createClass(MdInvertColorsOn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 32.7v-24.2l-7 7.1q-3 2.9-3 7.1 0 4 3 7t7 3z m9.5-19.5q3.9 3.9 3.9 9.4t-3.9 9.4-9.5 3.9-9.5-3.9-3.9-9.4 3.9-9.4l9.5-9.4z' })
                )
            );
        }
    }]);

    return MdInvertColorsOn;
}(React.Component);

exports.default = MdInvertColorsOn;
module.exports = exports['default'];