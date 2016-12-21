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

var FaCreativeCommons = function (_React$Component) {
    _inherits(FaCreativeCommons, _React$Component);

    function FaCreativeCommons() {
        _classCallCheck(this, FaCreativeCommons);

        return _possibleConstructorReturn(this, (FaCreativeCommons.__proto__ || Object.getPrototypeOf(FaCreativeCommons)).apply(this, arguments));
    }

    _createClass(FaCreativeCommons, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.5 27.5q3.4 0 5.7-2.3 0.4-0.4 0.1-0.8l-1-1.8q-0.1-0.3-0.5-0.4-0.4-0.1-0.6 0.2l-0.1 0.1q-0.1 0.1-0.3 0.2t-0.4 0.3-0.5 0.3-0.6 0.3-0.8 0.3-0.8 0q-1.7 0-2.8-1.1t-1.1-2.8q0-1.7 1.1-2.8t2.7-1.1q0.8 0 1.6 0.3t1.1 0.6l0.4 0.3q0.2 0.3 0.6 0.2 0.3 0 0.5-0.3l1.2-1.7q0.3-0.5-0.1-0.9 0-0.1-0.2-0.2t-0.7-0.6-1.1-0.6-1.5-0.5-1.9-0.2q-3.3 0-5.5 2.1t-2.2 5.4q0 3.3 2.2 5.4t5.5 2.1z m14.1 0q3.4 0 5.7-2.3 0.3-0.4 0.1-0.8l-1-1.8q-0.2-0.3-0.6-0.4-0.3-0.1-0.6 0.2l-0.1 0.1q-0.1 0.1-0.2 0.2t-0.4 0.3-0.5 0.3-0.7 0.3-0.7 0.3-0.9 0q-1.7 0-2.7-1.1t-1.1-2.8q0-1.7 1-2.8t2.8-1.1q0.8 0 1.6 0.3t1.1 0.6l0.3 0.3q0.3 0.3 0.6 0.2 0.4 0 0.6-0.3l1.1-1.7q0.3-0.5 0-0.9-0.1-0.1-0.3-0.2t-0.6-0.6-1.1-0.6-1.5-0.5-1.9-0.2q-3.3 0-5.5 2.1t-2.2 5.4q0 3.3 2.1 5.4t5.6 2.1z m-7.6-23.9q-3.3 0-6.4 1.3t-5.2 3.5-3.5 5.2-1.3 6.4 1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5-6.4-1.3z m0-3.6q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z' })
                )
            );
        }
    }]);

    return FaCreativeCommons;
}(React.Component);

exports.default = FaCreativeCommons;
module.exports = exports['default'];