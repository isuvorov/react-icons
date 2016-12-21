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

var IoEasel = function (_React$Component) {
    _inherits(IoEasel, _React$Component);

    function IoEasel() {
        _classCallCheck(this, IoEasel);

        return _possibleConstructorReturn(this, (IoEasel.__proto__ || Object.getPrototypeOf(IoEasel)).apply(this, arguments));
    }

    _createClass(IoEasel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.8 26.3v-15h27.5v15h-27.5z m30-18.8c0.7 0 1.2 0.5 1.2 1.3v20c0 0.7-0.5 1.2-1.2 1.2h-32.5c-0.8 0-1.3-0.5-1.3-1.2v-20c0-0.8 0.5-1.3 1.3-1.3h32.5z m-1.3 20v-17.5h-30v17.5h30z m-28.7 10l2.2-6.2h2.4l-2.1 6.2h-2.5z m14.9-35l1.3 3.8h-5l1.3-3.8h2.4z m7.9 28.8h2.4l2.3 6.2h-2.5z m-10.3 3.7v-3.7h2.5v3.7h-2.5z' })
                )
            );
        }
    }]);

    return IoEasel;
}(React.Component);

exports.default = IoEasel;
module.exports = exports['default'];