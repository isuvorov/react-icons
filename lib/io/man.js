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

var IoMan = function (_React$Component) {
    _inherits(IoMan, _React$Component);

    function IoMan() {
        _classCallCheck(this, IoMan);

        return _possibleConstructorReturn(this, (IoMan.__proto__ || Object.getPrototypeOf(IoMan)).apply(this, arguments));
    }

    _createClass(IoMan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.1 8.4c-1.7 0-2.9-1.4-2.9-3s1.2-2.9 2.9-2.9 2.9 1.2 2.9 2.9-1.3 3-2.9 3z m2.9 0.6c2.1 0 3.6 1.9 3.6 3.7v8.9c0 1.8-2.5 1.8-2.5 0v-8.2h-0.4v22.4c0 2.2-3.2 2.4-3.3 0v-12.9h-0.6v12.9c-0.1 2.2-3.4 2.3-3.4 0v-22.4h-0.5v8.2c0 1.8-2.4 1.8-2.4 0v-8.9c0-1.8 1.5-3.7 3.7-3.7h5.8z' })
                )
            );
        }
    }]);

    return IoMan;
}(React.Component);

exports.default = IoMan;
module.exports = exports['default'];