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

var MdBrightness6 = function (_React$Component) {
    _inherits(MdBrightness6, _React$Component);

    function MdBrightness6() {
        _classCallCheck(this, MdBrightness6);

        return _possibleConstructorReturn(this, (MdBrightness6.__proto__ || Object.getPrototypeOf(MdBrightness6)).apply(this, arguments));
    }

    _createClass(MdBrightness6, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 30q4.1 0 7.1-2.9t2.9-7.1-2.9-7.1-7.1-2.9v20z m13.4-4.5v7.9h-7.9l-5.5 5.4-5.5-5.4h-7.9v-7.9l-5.4-5.5 5.4-5.5v-7.9h7.9l5.5-5.4 5.5 5.4h7.9v7.9l5.4 5.5z' })
                )
            );
        }
    }]);

    return MdBrightness6;
}(React.Component);

exports.default = MdBrightness6;
module.exports = exports['default'];