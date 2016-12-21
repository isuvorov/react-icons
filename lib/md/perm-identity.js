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

var MdPermIdentity = function (_React$Component) {
    _inherits(MdPermIdentity, _React$Component);

    function MdPermIdentity() {
        _classCallCheck(this, MdPermIdentity);

        return _possibleConstructorReturn(this, (MdPermIdentity.__proto__ || Object.getPrototypeOf(MdPermIdentity)).apply(this, arguments));
    }

    _createClass(MdPermIdentity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 21.6q2.5 0 5.5 0.7t5.4 2.4 2.5 3.7v5h-26.8v-5q0-2.1 2.5-3.7t5.4-2.4 5.5-0.7z m0-15q2.7 0 4.7 2t1.9 4.8-1.9 4.6-4.7 2-4.7-2-1.9-4.6 1.9-4.8 4.7-2z m0 18.2q-3.4 0-6.8 1.3t-3.4 2.3v1.8h20.4v-1.8q0-1-3.4-2.3t-6.8-1.3z m0-15q-1.5 0-2.5 1.1t-1 2.5 1 2.4 2.5 1 2.5-1 1-2.4-1-2.5-2.5-1.1z' })
                )
            );
        }
    }]);

    return MdPermIdentity;
}(React.Component);

exports.default = MdPermIdentity;
module.exports = exports['default'];