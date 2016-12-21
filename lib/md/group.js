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

var MdGroup = function (_React$Component) {
    _inherits(MdGroup, _React$Component);

    function MdGroup() {
        _classCallCheck(this, MdGroup);

        return _possibleConstructorReturn(this, (MdGroup.__proto__ || Object.getPrototypeOf(MdGroup)).apply(this, arguments));
    }

    _createClass(MdGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 21.6q2.2 0 4.8 0.7t4.8 2 2.2 3.2v4.1h-10v-4.1q0-3.4-3.3-5.8 0.5-0.1 1.5-0.1z m-13.2 0q2.1 0 4.7 0.7t4.8 2 2.1 3.2v4.1h-23.4v-4.1q0-1.8 2.2-3.2t4.8-2 4.8-0.7z m0-3.2q-2.1 0-3.6-1.5t-1.4-3.5 1.4-3.6 3.6-1.4 3.4 1.4 1.5 3.6-1.5 3.5-3.4 1.5z m13.2 0q-2 0-3.5-1.5t-1.5-3.5 1.5-3.6 3.5-1.4 3.6 1.4 1.4 3.6-1.4 3.5-3.6 1.5z' })
                )
            );
        }
    }]);

    return MdGroup;
}(React.Component);

exports.default = MdGroup;
module.exports = exports['default'];