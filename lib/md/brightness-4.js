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

var MdBrightness4 = function (_React$Component) {
    _inherits(MdBrightness4, _React$Component);

    function MdBrightness4() {
        _classCallCheck(this, MdBrightness4);

        return _possibleConstructorReturn(this, (MdBrightness4.__proto__ || Object.getPrototypeOf(MdBrightness4)).apply(this, arguments));
    }

    _createClass(MdBrightness4, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 30c5.5 0 10-4.5 10-10s-4.5-10-10-10c-1.5 0-2.9 0.4-4.1 0.9 3.4 1.6 5.7 5 5.7 9.1s-2.3 7.5-5.7 9.1c1.2 0.5 2.6 0.9 4.1 0.9z m13.4-15.5l5.4 5.5-5.4 5.5v7.9h-7.9l-5.5 5.4-5.5-5.4h-7.9v-7.9l-5.4-5.5 5.4-5.5v-7.9h7.9l5.5-5.4 5.5 5.4h7.9v7.9z' })
                )
            );
        }
    }]);

    return MdBrightness4;
}(React.Component);

exports.default = MdBrightness4;
module.exports = exports['default'];