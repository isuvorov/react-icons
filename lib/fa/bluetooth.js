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

var FaBluetooth = function (_React$Component) {
    _inherits(FaBluetooth, _React$Component);

    function FaBluetooth() {
        _classCallCheck(this, FaBluetooth);

        return _possibleConstructorReturn(this, (FaBluetooth.__proto__ || Object.getPrototypeOf(FaBluetooth)).apply(this, arguments));
    }

    _createClass(FaBluetooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.8 23.5l3.3 3.3-3.4 3.3z m0-13.6l3.3 3.3-3.3 3.3z m-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8-10.4-10.4v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6z m16.1-17.2q0 4.7-0.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9 0.5-4.9-0.5-4-2-3.1-3.6-2-5.7-0.7-8.2 0.7-8.2 2-5.7 3.1-3.6 4-2 4.9-0.5 4.9 0.5 4.1 2 3.1 3.6 2 5.7 0.7 8.2z' })
                )
            );
        }
    }]);

    return FaBluetooth;
}(React.Component);

exports.default = FaBluetooth;
module.exports = exports['default'];