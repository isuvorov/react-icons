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

var MdForum = function (_React$Component) {
    _inherits(MdForum, _React$Component);

    function MdForum() {
        _classCallCheck(this, MdForum);

        return _possibleConstructorReturn(this, (MdForum.__proto__ || Object.getPrototypeOf(MdForum)).apply(this, arguments));
    }

    _createClass(MdForum, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 20q0 0.7-0.5 1.2t-1.3 0.4h-16.6l-6.6 6.8v-23.4q0-0.7 0.4-1.2t1.2-0.4h21.6q0.7 0 1.3 0.4t0.5 1.2v15z m6.6-10q0.7 0 1.2 0.5t0.4 1.1v25l-6.6-6.6h-18.4q-0.7 0-1.1-0.5t-0.5-1.1v-3.4h21.6v-15h3.4z' })
                )
            );
        }
    }]);

    return MdForum;
}(React.Component);

exports.default = MdForum;
module.exports = exports['default'];