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

var IoShare = function (_React$Component) {
    _inherits(IoShare, _React$Component);

    function IoShare() {
        _classCallCheck(this, IoShare);

        return _possibleConstructorReturn(this, (IoShare.__proto__ || Object.getPrototypeOf(IoShare)).apply(this, arguments));
    }

    _createClass(IoShare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 29.5v-4.6l3-2.4v8.5c0 0.9-0.7 1.5-1.5 1.5h-22.5c-0.9 0-1.5-0.7-1.5-1.5v-17c0-0.9 0.6-1.5 1.5-1.5h9.4c-2.3 1.4-3.4 3-3.4 3h-4.5v14h19.5z m-2.5-12c-6.6 0-9.1 1.9-12.5 7.5 0 0 0.4-12.8 12.5-12.8v-4.7l10 7.5-10 7.5v-5z' })
                )
            );
        }
    }]);

    return IoShare;
}(React.Component);

exports.default = IoShare;
module.exports = exports['default'];