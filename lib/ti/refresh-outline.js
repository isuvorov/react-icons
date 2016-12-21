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

var TiRefreshOutline = function (_React$Component) {
    _inherits(TiRefreshOutline, _React$Component);

    function TiRefreshOutline() {
        _classCallCheck(this, TiRefreshOutline);

        return _possibleConstructorReturn(this, (TiRefreshOutline.__proto__ || Object.getPrototypeOf(TiRefreshOutline)).apply(this, arguments));
    }

    _createClass(TiRefreshOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.9 8.3c-0.8 0-2 0.3-3.2 1.3-1.7-0.8-3.7-1.3-5.7-1.3-7.4 0-13.3 6-13.3 13.4s5.9 13.3 13.3 13.3c7.2 0 13.3-5.5 13.3-13.3v-8.3c0-3.5-2.3-5.1-4.4-5.1z m1.1 13.4h-8.5c-1.9 0-2.4-1-1.1-2.3l2.5-2.3c-1-0.7-2.1-1-3.2-1-1.6 0-3 0.7-4.1 1.8-1.1 1.1-1.7 2.5-1.7 4.1 0 1.5 0.6 3 1.7 4.1 1.1 1.1 2.5 1.7 4.1 1.7s3-0.6 4.1-1.7c0.3-0.3 0.5-0.6 0.8-1 0.3-0.5 1-0.9 1.6-0.9 0.4 0 0.7 0.1 1 0.4 0.9 0.5 1.2 1.7 0.6 2.6-0.3 0.6-0.8 1.1-1.3 1.6-1.8 1.9-4.2 2.9-6.8 2.9s-5-1-6.9-2.9c-1.8-1.8-2.8-4.2-2.8-6.8s1-5 2.8-6.8c1.9-1.9 4.3-2.9 6.9-2.9 2.2 0 4.2 0.7 5.9 2.1l1.9-2c0.6-0.5 1.1-0.7 1.4-0.7 0.7 0 1.1 0.6 1.1 1.7v8.3z m-11.8 0.1c0.3 0.6 1.1 1.5 3.3 1.5h2.1s-0.3 0.9-1 1.5-1.8 1.3-2.9 1.3-2.2-0.4-3-1.2c-0.7-0.8-1.2-1.8-1.2-2.9s0.5-1.9 1.2-2.7c0.8-0.8 1.9-1 3-1 0 0-0.4 0.2-0.4 0.2-1.6 1.6-1.4 2.6-1.1 3.2z' })
                )
            );
        }
    }]);

    return TiRefreshOutline;
}(React.Component);

exports.default = TiRefreshOutline;
module.exports = exports['default'];