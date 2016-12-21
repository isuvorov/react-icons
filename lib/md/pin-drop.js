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

var MdPinDrop = function (_React$Component) {
    _inherits(MdPinDrop, _React$Component);

    function MdPinDrop() {
        _classCallCheck(this, MdPinDrop);

        return _possibleConstructorReturn(this, (MdPinDrop.__proto__ || Object.getPrototypeOf(MdPinDrop)).apply(this, arguments));
    }

    _createClass(MdPinDrop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.4 33.4h23.2v3.2h-23.2v-3.2z m8.2-20c0 1.8 1.6 3.2 3.4 3.2 1.9 0 3.4-1.4 3.4-3.2s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4z m13.4 0c0 7.5-10 18.2-10 18.2s-10-10.7-10-18.2c0-5.6 4.5-10 10-10s10 4.4 10 10z' })
                )
            );
        }
    }]);

    return MdPinDrop;
}(React.Component);

exports.default = MdPinDrop;
module.exports = exports['default'];