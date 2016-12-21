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

var MdCake = function (_React$Component) {
    _inherits(MdCake, _React$Component);

    function MdCake() {
        _classCallCheck(this, MdCake);

        return _possibleConstructorReturn(this, (MdCake.__proto__ || Object.getPrototypeOf(MdCake)).apply(this, arguments));
    }

    _createClass(MdCake, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 15c2.7 0 5 2.3 5 5v2.6c0 1.8-1.5 3.3-3.3 3.3-0.8 0-1.6-0.4-2.2-1l-3.6-3.6-3.6 3.6c-1.3 1.3-3.4 1.3-4.6 0l-3.6-3.6-3.6 3.6c-0.6 0.6-1.4 1-2.2 1-1.8 0-3.3-1.5-3.3-3.3v-2.6c0-2.7 2.3-5 5-5h8.4v-3.4h3.2v3.4h8.4z m-2.3 11.6c1.1 1.1 2.5 1.8 4 1.8 1.3 0 2.4-0.4 3.3-1.1v7.7c0 0.9-0.7 1.6-1.6 1.6h-26.8c-0.9 0-1.6-0.7-1.6-1.6v-7.7c0.9 0.7 2 1.1 3.3 1.1 1.5 0 3-0.7 4-1.8l1.8-1.8 1.8 1.8c2.2 2.2 6 2.2 8.2 0l1.8-1.8z m-7.7-16.6c-1.8 0-3.4-1.6-3.4-3.4 0-0.6 0.3-1.2 0.6-1.7l2.8-4.9 2.8 4.9c0.3 0.5 0.6 1.1 0.6 1.7 0 1.8-1.5 3.4-3.4 3.4z' })
                )
            );
        }
    }]);

    return MdCake;
}(React.Component);

exports.default = MdCake;
module.exports = exports['default'];