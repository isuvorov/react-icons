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

var TiDeviceLaptop = function (_React$Component) {
    _inherits(TiDeviceLaptop, _React$Component);

    function TiDeviceLaptop() {
        _classCallCheck(this, TiDeviceLaptop);

        return _possibleConstructorReturn(this, (TiDeviceLaptop.__proto__ || Object.getPrototypeOf(TiDeviceLaptop)).apply(this, arguments));
    }

    _createClass(TiDeviceLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.6 26.7c0.1-0.5 0.1-1 0.1-1.7v-15c0-2.8-2.3-5-5-5h-23.4c-2.7 0-5 2.2-5 5v15c0 0.6 0 1.2 0.1 1.7-2 0.4-3.4 2.1-3.4 4.1 0 2.3 1.9 4.2 4.2 4.2h31.6c2.3 0 4.2-1.9 4.2-4.2 0-2-1.4-3.7-3.4-4.1z m-29.9-16.7c0-0.9 0.7-1.7 1.6-1.7h23.4c0.9 0 1.6 0.8 1.6 1.7v15c0 0.6 0 1.2 0 1.7h-1.6v-15c0-0.9-0.8-1.7-1.7-1.7h-20c-0.9 0-1.7 0.8-1.7 1.7v15h-1.6c0-0.5 0-1 0-1.7v-15z m23.3 16.7h-20v-15h20v15z m5.8 5h-31.6c-0.5 0-0.9-0.4-0.9-0.9s0.4-0.8 0.9-0.8h31.6c0.5 0 0.9 0.4 0.9 0.8s-0.4 0.9-0.9 0.9z' })
                )
            );
        }
    }]);

    return TiDeviceLaptop;
}(React.Component);

exports.default = TiDeviceLaptop;
module.exports = exports['default'];