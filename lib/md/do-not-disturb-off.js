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

var MdDoNotDisturbOff = function (_React$Component) {
    _inherits(MdDoNotDisturbOff, _React$Component);

    function MdDoNotDisturbOff() {
        _classCallCheck(this, MdDoNotDisturbOff);

        return _possibleConstructorReturn(this, (MdDoNotDisturbOff.__proto__ || Object.getPrototypeOf(MdDoNotDisturbOff)).apply(this, arguments));
    }

    _createClass(MdDoNotDisturbOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 21.6h5.8l-3.3-3.2h-2.5v3.2z m-7.8-17.8l32.5 32.5-2.2 2.1-4.6-4.7c-2.7 1.8-6 2.9-9.5 2.9-9.2 0-16.6-7.4-16.6-16.6 0-3.5 1.1-6.8 2.9-9.5l-4.7-4.6z m24.6 14.6h-5.8l-12-12.1c2.6-1.8 5.9-2.9 9.4-2.9 9.2 0 16.6 7.4 16.6 16.6 0 3.5-1.1 6.8-2.9 9.5l-7.8-7.9h2.5v-3.2z' })
                )
            );
        }
    }]);

    return MdDoNotDisturbOff;
}(React.Component);

exports.default = MdDoNotDisturbOff;
module.exports = exports['default'];