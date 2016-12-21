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

var IoRadioWaves = function (_React$Component) {
    _inherits(IoRadioWaves, _React$Component);

    function IoRadioWaves() {
        _classCallCheck(this, IoRadioWaves);

        return _possibleConstructorReturn(this, (IoRadioWaves.__proto__ || Object.getPrototypeOf(IoRadioWaves)).apply(this, arguments));
    }

    _createClass(IoRadioWaves, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 20c0-3.4 1.6-5 5-5s5 1.6 5 5-1.6 5-5 5-5-1.6-5-5z m-3.7 0c0 1.4 0.3 2.7 1 3.9s1.5 2.2 2.5 2.9l-1.8 2c-0.4-0.4-1-0.8-1.4-1.3-1.9-2-2.8-4.6-2.8-7.5s0.9-5.5 2.8-7.5c0.4-0.5 1-0.9 1.4-1.2l1.8 1.9c-1 0.7-1.9 1.7-2.5 2.9s-1 2.5-1 3.9z m17.5 0c0-1.4-0.4-2.7-1.1-3.9s-1.4-2.2-2.5-2.9l1.8-1.9c0.4 0.3 1 0.7 1.4 1.2 1.9 2 2.8 4.6 2.8 7.5s-0.9 5.5-2.8 7.5c-0.4 0.5-1 0.9-1.4 1.3l-1.8-2c1-0.7 1.9-1.7 2.5-2.9s1-2.5 1-3.9z m-23.8 0c0 2.1 0.5 4.1 1.3 6s2.1 3.4 3.7 4.6l-1.8 1.9c-0.5-0.4-0.9-0.8-1.3-1.2-1.4-1.5-2.4-3.3-3.2-5.1-0.8-2-1.2-4-1.2-6.2s0.4-4.2 1.2-6.2c0.8-1.8 1.8-3.6 3.2-5 0.4-0.5 0.8-0.9 1.3-1.3l1.8 1.9c-0.8 0.6-1.4 1.3-2 2.1s-1.1 1.6-1.6 2.5-0.8 1.9-1 2.9-0.4 2-0.4 3.1z m30 0c0-2.1-0.5-4.1-1.3-6s-2.1-3.4-3.7-4.6l1.8-1.9c0.5 0.4 0.9 0.8 1.3 1.3 1.4 1.4 2.4 3.2 3.2 5 0.8 2 1.2 4 1.2 6.2s-0.4 4.2-1.2 6.2c-0.8 1.8-1.8 3.6-3.2 5.1-0.3 0.3-0.8 0.7-1.3 1.2l-1.8-1.9c1.6-1.2 2.8-2.7 3.7-4.6s1.3-3.9 1.3-6z' })
                )
            );
        }
    }]);

    return IoRadioWaves;
}(React.Component);

exports.default = IoRadioWaves;
module.exports = exports['default'];