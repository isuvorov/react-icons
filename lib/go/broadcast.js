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

var GoBroadcast = function (_React$Component) {
    _inherits(GoBroadcast, _React$Component);

    function GoBroadcast() {
        _classCallCheck(this, GoBroadcast);

        return _possibleConstructorReturn(this, (GoBroadcast.__proto__ || Object.getPrototypeOf(GoBroadcast)).apply(this, arguments));
    }

    _createClass(GoBroadcast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.5c5.5 0 10 4.5 10 10 0 2.7-1.1 5.2-2.8 7l-0.6 3.6c3.5-2.2 5.9-6.1 5.9-10.6 0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5c0 4.5 2.4 8.4 5.9 10.6l-0.6-3.6c-1.7-1.8-2.8-4.3-2.8-7 0-5.5 4.5-10 10-10z m-2.5 12.5c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.2 2.5 2.5 2.5v10h5v-10c1.3 0 2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5h-5z m7.5-5c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z m-5-15c-9.6 0-17.5 7.9-17.5 17.5 0 7.7 5 14.2 11.9 16.5l-0.5-2.8c-5.2-2.3-8.9-7.6-8.9-13.7 0-8.3 6.7-15 15-15s15 6.7 15 15c0 6.1-3.7 11.4-8.9 13.7l-0.5 2.8c6.9-2.3 11.9-8.8 11.9-16.5 0-9.6-7.9-17.5-17.5-17.5z' })
                )
            );
        }
    }]);

    return GoBroadcast;
}(React.Component);

exports.default = GoBroadcast;
module.exports = exports['default'];