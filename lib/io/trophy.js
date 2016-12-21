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

var IoTrophy = function (_React$Component) {
    _inherits(IoTrophy, _React$Component);

    function IoTrophy() {
        _classCallCheck(this, IoTrophy);

        return _possibleConstructorReturn(this, (IoTrophy.__proto__ || Object.getPrototypeOf(IoTrophy)).apply(this, arguments));
    }

    _createClass(IoTrophy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 8c0 2 0.2 5.8-1.7 9.6-1.2 2.3-2.8 4.3-4.9 5.8-1.8 1.3-3.9 2.2-6.1 2.8-1.2 1.3-2.5 2.1-3.6 2.4v2.6s0 3.8 7.8 3.8h1v2.5h-20v-2.5h1c6.7 0 7.6-2.7 7.7-3.6v-2.8c-1-0.3-2.3-1.1-3.5-2.4-2.2-0.6-4.3-1.5-6.1-2.8-2.1-1.5-3.7-3.5-4.9-5.8-1.3-2.8-1.6-5.6-1.7-7.6v-2.5h6.2c-0.1-2.7 0-5 0-5h22.5s0.1 2.3 0 5h6.3v0.5z m-31 8.5c1.3 2.6 3.3 4.8 6 6.1-1.7-3.1-2.6-6.6-3.3-10.6-0.1-0.6-0.1-1.3-0.2-2h-4c0.1 1.8 0.4 4.1 1.5 6.5z m27 0c1.1-2.4 1.4-4.7 1.5-6.5h-4c-0.1 0.7-0.2 1.4-0.3 2-0.7 4-1.6 7.5-3.3 10.6 2.7-1.3 4.8-3.4 6.1-6.1z' })
                )
            );
        }
    }]);

    return IoTrophy;
}(React.Component);

exports.default = IoTrophy;
module.exports = exports['default'];