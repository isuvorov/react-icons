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

var IoLaptop = function (_React$Component) {
    _inherits(IoLaptop, _React$Component);

    function IoLaptop() {
        _classCallCheck(this, IoLaptop);

        return _possibleConstructorReturn(this, (IoLaptop.__proto__ || Object.getPrototypeOf(IoLaptop)).apply(this, arguments));
    }

    _createClass(IoLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 8.3v20.5h-35v-20.5c0-0.5 0.3-0.8 0.8-0.8h33.4c0.5 0 0.8 0.3 0.8 0.8z m-2.5 18v-16.3h-30v16.3h30z m-35 4.1v-0.4h40v0.4c-5.5 1.6-9.1 2.1-20 2.1s-14.5-0.5-20-2.1z' })
                )
            );
        }
    }]);

    return IoLaptop;
}(React.Component);

exports.default = IoLaptop;
module.exports = exports['default'];