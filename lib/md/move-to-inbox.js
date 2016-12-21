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

var MdMoveToInbox = function (_React$Component) {
    _inherits(MdMoveToInbox, _React$Component);

    function MdMoveToInbox() {
        _classCallCheck(this, MdMoveToInbox);

        return _possibleConstructorReturn(this, (MdMoveToInbox.__proto__ || Object.getPrototypeOf(MdMoveToInbox)).apply(this, arguments));
    }

    _createClass(MdMoveToInbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 16.6l-6.6 6.8-6.6-6.8h3.2v-5h6.8v5h3.2z m5 8.4v-16.6h-23.3v16.6h6.7q0 2 1.5 3.5t3.5 1.5 3.5-1.5 1.5-3.5h6.6z m0-20q1.4 0 2.4 1t1 2.4v23.2q0 1.4-1 2.4t-2.4 1h-23.3q-1.4 0-2.4-1t-0.9-2.4v-23.2q0-1.4 0.9-2.4t2.4-1h23.3z' })
                )
            );
        }
    }]);

    return MdMoveToInbox;
}(React.Component);

exports.default = MdMoveToInbox;
module.exports = exports['default'];