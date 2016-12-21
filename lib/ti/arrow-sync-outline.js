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

var TiArrowSyncOutline = function (_React$Component) {
    _inherits(TiArrowSyncOutline, _React$Component);

    function TiArrowSyncOutline() {
        _classCallCheck(this, TiArrowSyncOutline);

        return _possibleConstructorReturn(this, (TiArrowSyncOutline.__proto__ || Object.getPrototypeOf(TiArrowSyncOutline)).apply(this, arguments));
    }

    _createClass(TiArrowSyncOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 20.8c0-4.2-1.3-7.4-4.4-10.4-0.5-0.6-1.1-0.9-1.8-1.2l-7.7-7.7c-1-1-2.2-1.5-3.6-1.5s-2.6 0.5-3.5 1.5c-0.9 0.9-1.5 2.2-1.5 3.5 0 0.5 0.1 0.9 0.2 1.3-1.7 0.8-3.3 1.9-4.7 3.3-3 3-4.6 7-4.6 11.2 0 4.2 1.3 7.4 4.4 10.5 0.5 0.5 1.1 0.8 1.7 1.1l7.8 7.8c1 0.9 2.2 1.5 3.6 1.5s2.6-0.6 3.5-1.5c0.9-0.9 1.5-2.2 1.5-3.5 0-0.5-0.1-1-0.2-1.4 1.7-0.8 3.3-1.9 4.7-3.3 3-3 4.6-7 4.6-11.2z m-15.2 12.5l2.2 2.2c0.7 0.6 0.7 1.7 0 2.3-0.3 0.4-0.7 0.5-1.1 0.5s-0.9-0.1-1.2-0.5l-6.2-6.1 6.2-6.2c0.3-0.3 0.7-0.5 1.2-0.5s0.8 0.2 1.1 0.5c0.7 0.6 0.7 1.7 0 2.3l-2 2.1c2.2-0.1 4-1 5.7-2.6 1.7-1.8 2.7-4.1 2.7-6.5 0-2.4-0.7-3.9-2.5-5.7-0.7-0.7-0.7-1.7 0-2.4 0.3-0.3 0.7-0.5 1.2-0.5 0.4 0 0.8 0.2 1.2 0.5 2.4 2.4 3.4 4.8 3.4 8.1 0 3.3-1.3 6.5-3.7 8.8-2.3 2.3-5 3.5-8.2 3.7z m-1.3-24.9l-2.1-2.2c-0.7-0.7-0.7-1.7 0-2.4 0.3-0.3 0.7-0.5 1.1-0.5s0.9 0.2 1.2 0.5l6.2 6.2-6.2 6.2c-0.3 0.3-0.7 0.5-1.2 0.5s-0.8-0.2-1.1-0.5c-0.7-0.7-0.7-1.7 0-2.4l2.1-2.1c-2.3 0.1-4.1 1-5.8 2.6-1.7 1.8-2.7 4.1-2.7 6.5 0 2.4 0.7 4 2.5 5.7 0.7 0.7 0.7 1.8 0 2.4-0.3 0.3-0.8 0.5-1.2 0.5s-0.8-0.2-1.2-0.5c-2.4-2.4-3.4-4.8-3.4-8.1 0-3.3 1.3-6.4 3.7-8.8 2.3-2.3 4.9-3.5 8.1-3.6z m-4.8 17c-1.5-1.5-2-2.7-2-4.6 0-2 0.8-3.9 2.2-5.3 0.1-0.1 0.2-0.2 0.3-0.3 0.1 0.8 0.4 1.6 1 2.2 0.6 0.6 1.4 0.9 2.3 0.9s1.8-0.3 2.4-0.9l3.9-3.9c-0.1 1 0.2 2 0.9 2.8 1.5 1.4 2 2.6 2 4.5 0 2-0.8 3.9-2.2 5.3-0.1 0.1-0.2 0.2-0.3 0.3-0.1-0.8-0.4-1.5-1-2.1-0.6-0.6-1.4-1-2.3-1s-1.8 0.4-2.4 1l-3.9 3.9c0.2-1-0.1-2.1-0.9-2.8z' })
                )
            );
        }
    }]);

    return TiArrowSyncOutline;
}(React.Component);

exports.default = TiArrowSyncOutline;
module.exports = exports['default'];