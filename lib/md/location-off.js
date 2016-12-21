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

var MdLocationOff = function (_React$Component) {
    _inherits(MdLocationOff, _React$Component);

    function MdLocationOff() {
        _classCallCheck(this, MdLocationOff);

        return _possibleConstructorReturn(this, (MdLocationOff.__proto__ || Object.getPrototypeOf(MdLocationOff)).apply(this, arguments));
    }

    _createClass(MdLocationOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.5 19.1c4.7 4.6 9.3 9.2 13.9 13.8l-2.1 2.1-5.7-5.5c-2.8 4.1-5.6 7.1-5.6 7.1s-11.6-12.8-11.6-21.6c0-0.9 0.1-1.7 0.3-2.6l-5.3-5.3 2.1-2.1 13.9 13.9z m0.5-8.2c-1.2 0-2.3 0.5-3 1.4l-5.4-5.3c2.1-2.2 5.1-3.6 8.4-3.6 6.5 0 11.6 5.1 11.6 11.6 0 2.8-1.1 6-2.8 9.1l-6-6.1c0.9-0.7 1.3-1.7 1.3-3 0-2.3-1.8-4.1-4.1-4.1z' })
                )
            );
        }
    }]);

    return MdLocationOff;
}(React.Component);

exports.default = MdLocationOff;
module.exports = exports['default'];