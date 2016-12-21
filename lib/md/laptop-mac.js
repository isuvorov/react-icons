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

var MdLaptopMac = function (_React$Component) {
    _inherits(MdLaptopMac, _React$Component);

    function MdLaptopMac() {
        _classCallCheck(this, MdLaptopMac);

        return _possibleConstructorReturn(this, (MdLaptopMac.__proto__ || Object.getPrototypeOf(MdLaptopMac)).apply(this, arguments));
    }

    _createClass(MdLaptopMac, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 31.6c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.6-1.6-1.6-1.6 0.7-1.6 1.6 0.7 1.6 1.6 1.6z m-13.4-23.2v18.2h26.8v-18.2h-26.8z m26.8 21.6h6.6c0 1.8-1.6 3.4-3.4 3.4h-33.2c-1.8 0-3.4-1.6-3.4-3.4h6.6c-1.8 0-3.2-1.6-3.2-3.4v-18.2c0-1.8 1.4-3.4 3.2-3.4h26.8c1.8 0 3.2 1.6 3.2 3.4v18.2c0 1.8-1.4 3.4-3.2 3.4z' })
                )
            );
        }
    }]);

    return MdLaptopMac;
}(React.Component);

exports.default = MdLaptopMac;
module.exports = exports['default'];