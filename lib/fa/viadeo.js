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

var FaViadeo = function (_React$Component) {
    _inherits(FaViadeo, _React$Component);

    function FaViadeo() {
        _classCallCheck(this, FaViadeo);

        return _possibleConstructorReturn(this, (FaViadeo.__proto__ || Object.getPrototypeOf(FaViadeo)).apply(this, arguments));
    }

    _createClass(FaViadeo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.9 24.7q0 4.8-3.2 8.3-3.3 3.6-8.5 3.6-5.2 0-8.4-3.6-3.3-3.5-3.3-8.3 0-3.3 1.5-6.1t4.2-4.3 6-1.7q2.2 0 4.1 0.7-0.7 1.4-0.9 2.8-1.5-0.6-3.2-0.6-3.7 0-6.2 2.8t-2.6 6.5q0 3.8 2.5 6.4t6.3 2.6 6.3-2.6 2.5-6.4q0-2-0.7-3.7 1.4-0.3 2.7-1.1 0.9 2.1 0.9 4.7z m-4.5-4.2q0 4.3-1.8 7.7t-5.3 5.6l-0.3 0q-0.7 0-1.4-0.1 1.8-0.7 3.3-2.3t2.2-3.4 1.3-4.2 0.7-4.3 0.1-4q0-1.6 0-2.3 1.2 3.6 1.2 7.3z m-1.2-7.4v0.1q-1.7-4.8-4.6-9.8 1.9 1.3 3.1 4.1t1.5 5.6z m5.4 4.6q-1.9 0-3.6-1.7 4.9-2.7 6.5-5.5 0.4-0.8 0.5-1.3-1 2.1-3.1 3.8t-4.6 2.1q-0.8-1.2-0.8-2.5 0-0.8 0.4-1.8t1-1.5q1-1 3.5-1.6 1.3-0.4 2.3-1.3t1.7-2.3q1.6 2.4 1.6 5.7 0 2.4-0.5 3.8-0.7 1.7-2 2.9t-2.9 1.2z' })
                )
            );
        }
    }]);

    return FaViadeo;
}(React.Component);

exports.default = FaViadeo;
module.exports = exports['default'];