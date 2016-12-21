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

var GoUnmute = function (_React$Component) {
    _inherits(GoUnmute, _React$Component);

    function GoUnmute() {
        _classCallCheck(this, GoUnmute);

        return _possibleConstructorReturn(this, (GoUnmute.__proto__ || Object.getPrototypeOf(GoUnmute)).apply(this, arguments));
    }

    _createClass(GoUnmute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 15h-5v10h5l10 7.5h2.5v-25h-2.5l-10 7.5z m16 1.5c-0.5-0.5-1.2-0.5-1.7 0s-0.5 1.2 0 1.7c0.9 1 0.9 2.6 0 3.6-0.5 0.5-0.5 1.2 0 1.7s1.2 0.5 1.7 0c2-1.9 2-5.1 0-7z m3.6-3.6c-0.5-0.5-1.3-0.5-1.8 0s-0.5 1.3 0 1.8c2.9 2.9 2.9 7.7 0 10.6-0.5 0.5-0.5 1.3 0 1.8s1.3 0.5 1.8 0c3.9-3.9 3.9-10.3 0-14.2z m3.5-3.5c-0.5-0.5-1.3-0.5-1.8 0s-0.4 1.3 0 1.8c4.9 4.8 4.9 12.8 0 17.6-0.4 0.5-0.4 1.3 0 1.8s1.3 0.5 1.8 0c5.9-5.9 5.9-15.3 0-21.2z' })
                )
            );
        }
    }]);

    return GoUnmute;
}(React.Component);

exports.default = GoUnmute;
module.exports = exports['default'];