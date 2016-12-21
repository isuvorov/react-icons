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

var TiAt = function (_React$Component) {
    _inherits(TiAt, _React$Component);

    function TiAt() {
        _classCallCheck(this, TiAt);

        return _possibleConstructorReturn(this, (TiAt.__proto__ || Object.getPrototypeOf(TiAt)).apply(this, arguments));
    }

    _createClass(TiAt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.7c-7.4 0-13.3 6-13.3 13.3s6 13.3 13.3 13.3c2.7 0 5.3-0.8 7.5-2.3 0.8-0.5 1-1.5 0.4-2.3-0.5-0.8-1.5-0.9-2.3-0.4-1.6 1.1-3.6 1.7-5.6 1.7-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10v0.8c0 1-0.7 1.7-1.7 1.7s-1.6-0.7-1.6-1.7v-5c0-0.9-0.8-1.6-1.7-1.6-0.7 0-1.3 0.4-1.6 1.1-0.9-0.7-2.1-1.1-3.4-1.1-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8c1.7 0 3.3-0.8 4.4-2 0.9 1.2 2.3 2 3.9 2 2.8 0 5-2.2 5-5v-0.8c0-7.4-5.9-13.3-13.3-13.3z m0 15.8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiAt;
}(React.Component);

exports.default = TiAt;
module.exports = exports['default'];