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

var MdFormatColorReset = function (_React$Component) {
    _inherits(MdFormatColorReset, _React$Component);

    function MdFormatColorReset() {
        _classCallCheck(this, MdFormatColorReset);

        return _possibleConstructorReturn(this, (MdFormatColorReset.__proto__ || Object.getPrototypeOf(MdFormatColorReset)).apply(this, arguments));
    }

    _createClass(MdFormatColorReset, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.8 8.8l24.3 24.3-2.1 2.1-4.4-4.3q-2.9 2.5-6.6 2.5-4.1 0-7.1-3t-2.9-7q0-2.7 2.2-6.9l-5.6-5.6z m21.2 14.6q0 1.1-0.2 2.1l-14.3-14.3 4.5-5.9q1.1 1.3 2.8 3.4t4.4 6.9 2.8 7.8z' })
                )
            );
        }
    }]);

    return MdFormatColorReset;
}(React.Component);

exports.default = MdFormatColorReset;
module.exports = exports['default'];