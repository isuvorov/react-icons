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

var TiStarburst = function (_React$Component) {
    _inherits(TiStarburst, _React$Component);

    function TiStarburst() {
        _classCallCheck(this, TiStarburst);

        return _possibleConstructorReturn(this, (TiStarburst.__proto__ || Object.getPrototypeOf(TiStarburst)).apply(this, arguments));
    }

    _createClass(TiStarburst, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.8 16.8l1.9-3.9c0.2-0.3 0.2-0.6 0-0.8-0.1-0.3-0.4-0.4-0.7-0.4l-4.4-0.3-0.3-4.4c0-0.3-0.1-0.6-0.4-0.7s-0.5-0.2-0.8 0l-3.9 1.9-2.5-3.7c-0.3-0.4-1.1-0.4-1.4 0l-2.5 3.7-3.9-1.9c-0.3-0.2-0.6-0.2-0.8 0-0.3 0.1-0.4 0.4-0.4 0.7l-0.3 4.4-4.4 0.3c-0.3 0-0.6 0.1-0.7 0.4-0.2 0.2-0.2 0.5 0 0.8l1.9 3.9-3.7 2.5c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7l3.7 2.5-1.9 3.9c-0.2 0.3-0.2 0.6 0 0.8 0.1 0.3 0.4 0.4 0.7 0.4l4.4 0.3 0.3 4.4c0 0.3 0.1 0.6 0.4 0.7 0.2 0.2 0.5 0.2 0.8 0l3.9-1.9 2.5 3.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l2.5-3.7 3.9 1.9c0.3 0.2 0.6 0.2 0.8 0s0.4-0.4 0.4-0.7l0.3-4.4 4.4-0.3c0.3 0 0.6-0.1 0.7-0.4 0.2-0.2 0.2-0.5 0-0.8l-1.9-3.9 3.7-2.5c0.2-0.2 0.3-0.4 0.3-0.7s-0.1-0.5-0.3-0.7l-3.7-2.5z' })
                )
            );
        }
    }]);

    return TiStarburst;
}(React.Component);

exports.default = TiStarburst;
module.exports = exports['default'];