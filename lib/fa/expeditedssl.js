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

var FaExpeditedssl = function (_React$Component) {
    _inherits(FaExpeditedssl, _React$Component);

    function FaExpeditedssl() {
        _classCallCheck(this, FaExpeditedssl);

        return _possibleConstructorReturn(this, (FaExpeditedssl.__proto__ || Object.getPrototypeOf(FaExpeditedssl)).apply(this, arguments));
    }

    _createClass(FaExpeditedssl, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 1.4q-3.8 0-7.2 1.5t-5.9 4-4 5.9-1.5 7.2 1.5 7.2 4 5.9 5.9 4 7.2 1.5 7.2-1.5 5.9-4 4-5.9 1.5-7.2-1.5-7.2-4-5.9-5.9-4-7.2-1.5z m0-1.4q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m-8.9 18.6q0.3 0 0.3 0.3v10.7q0 0.4-0.3 0.4h-0.7q-0.4 0-0.4-0.4v-10.7q0-0.3 0.4-0.3h0.7z m8.9 1.4q1.2 0 2 0.8t0.9 2.1q0 0.7-0.4 1.4t-1.1 1v2.6q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.6q-0.7-0.4-1.1-1t-0.4-1.4q0-1.2 0.9-2.1t2-0.8z m0-17.1q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6-2.3 8.6-6.2 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m-7.9 10.7v2.1q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5v-2.1q0-2.1 1.5-3.6t3.5-1.4 3.5 1.4 1.5 3.6v2.1q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5v-2.1q0-3.3-2.3-5.6t-5.6-2.3-5.6 2.3-2.3 5.6z m19.3 16.4v-11.4q0-0.6-0.4-1t-1-0.5h-20q-0.6 0-1 0.5t-0.4 1v11.4q0 0.6 0.4 1t1 0.4h20q0.6 0 1-0.4t0.4-1z' })
                )
            );
        }
    }]);

    return FaExpeditedssl;
}(React.Component);

exports.default = FaExpeditedssl;
module.exports = exports['default'];