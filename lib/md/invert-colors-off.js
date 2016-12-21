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

var MdInvertColorsOff = function (_React$Component) {
    _inherits(MdInvertColorsOff, _React$Component);

    function MdInvertColorsOff() {
        _classCallCheck(this, MdInvertColorsOff);

        return _possibleConstructorReturn(this, (MdInvertColorsOff.__proto__ || Object.getPrototypeOf(MdInvertColorsOff)).apply(this, arguments));
    }

    _createClass(MdInvertColorsOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 8.5l-3.8 3.8-2.4-2.4 6.2-6.1 9.5 9.4q2.9 3 3.6 7.2t-1 7.8l-12.1-12v-7.7z m0 24.2v-8.1l-8-8q-2 2.7-2 6.1 0 4 3 7t7 3z m14.5 2.1l0.5 0.6-2.1 2.1-4.5-4.5q-3.7 2.9-8.4 2.9-5.6 0-9.5-3.9-3.5-3.6-3.8-8.8t2.9-9l-4.6-4.6 2.1-2.1q23.4 23.4 27.4 27.3z' })
                )
            );
        }
    }]);

    return MdInvertColorsOff;
}(React.Component);

exports.default = MdInvertColorsOff;
module.exports = exports['default'];