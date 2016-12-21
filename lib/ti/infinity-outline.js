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

var TiInfinityOutline = function (_React$Component) {
    _inherits(TiInfinityOutline, _React$Component);

    function TiInfinityOutline() {
        _classCallCheck(this, TiInfinityOutline);

        return _possibleConstructorReturn(this, (TiInfinityOutline.__proto__ || Object.getPrototypeOf(TiInfinityOutline)).apply(this, arguments));
    }

    _createClass(TiInfinityOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.4 14.3c1.9 0 3.7 0.8 5.1 2.1 1.3 1.4 2.1 3.2 2.1 5.1s-0.8 3.8-2.1 5.1c-1.4 1.4-3.2 2.1-5.1 2.1s-3.7-0.7-5.1-2.1l-2.3-2.2-2.3 2.3c-1.4 1.3-3.2 2-5.1 2s-3.7-0.7-5.1-2.1c-1.3-1.3-2.1-3.1-2.1-5.1s0.8-3.7 2.1-5.1c1.4-1.3 3.2-2.1 5.1-2.1 1.9 0 3.7 0.8 5.1 2.1l2.3 2.2 2.3-2.2c1.4-1.3 3.2-2.1 5.1-2.1z m0-3.3c-2.8 0-5.4 1.1-7.4 3-1.9-1.9-4.6-3-7.4-3-2.8 0-5.4 1.1-7.4 3.1-2 2-3.1 4.6-3.1 7.4s1.1 5.5 3.1 7.5c2 2 4.6 3.1 7.4 3.1 2.8 0 5.4-1.1 7.4-3.1 1.9 2 4.6 3.1 7.4 3.1 2.8 0 5.5-1.1 7.4-3.1 2-2 3.1-4.7 3.1-7.5 0-2.8-1.1-5.4-3.1-7.4-2-2-4.6-3.1-7.4-3.1z m-14.8 9.2c0.4 0 0.7 0.1 1 0.4l1 0.9-1 1c-0.3 0.2-0.6 0.4-1 0.4-0.4 0-0.7-0.2-0.9-0.4-0.3-0.3-0.4-0.6-0.4-1 0-0.3 0.1-0.7 0.4-0.9 0.2-0.3 0.5-0.4 0.9-0.4z m0-1.7c-0.8 0-1.6 0.3-2.1 0.9-0.6 0.6-0.9 1.3-0.9 2.1 0 0.8 0.3 1.6 0.9 2.2s1.3 0.8 2.1 0.8c0.8 0 1.6-0.3 2.2-0.8l2.2-2.2-2.2-2.1c-0.6-0.6-1.4-0.9-2.2-0.9z m14.8 1.7c0.4 0 0.7 0.1 1 0.4 0.2 0.2 0.4 0.6 0.4 0.9s-0.2 0.7-0.5 1c-0.2 0.2-0.5 0.4-0.9 0.4-0.4 0-0.7-0.2-1-0.5l-1-0.9 1-0.9c0.3-0.3 0.6-0.4 1-0.4z m0-1.7c-0.8 0-1.6 0.3-2.2 0.9l-2.2 2.1 2.2 2.1c0.6 0.6 1.4 0.9 2.2 0.9 0.8 0 1.6-0.3 2.1-0.8 0.6-0.6 0.9-1.4 0.9-2.2s-0.3-1.5-0.9-2.1c-0.5-0.6-1.3-0.9-2.1-0.9z' })
                )
            );
        }
    }]);

    return TiInfinityOutline;
}(React.Component);

exports.default = TiInfinityOutline;
module.exports = exports['default'];