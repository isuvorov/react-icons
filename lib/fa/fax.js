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

var FaFax = function (_React$Component) {
    _inherits(FaFax, _React$Component);

    function FaFax() {
        _classCallCheck(this, FaFax);

        return _possibleConstructorReturn(this, (FaFax.__proto__ || Object.getPrototypeOf(FaFax)).apply(this, arguments));
    }

    _createClass(FaFax, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.4 8.6q1.5 0 2.5 1t1.1 2.5v24.3q0 1.5-1.1 2.5t-2.5 1.1h-2.8q-1.5 0-2.5-1t-1.1-2.6v-24.3q0-1.4 1.1-2.5t2.5-1h2.8z m30.7 3.6q1.3 0.8 2.1 2.1t0.8 2.8v17.2q0 2.4-1.7 4t-4 1.7h-19.3q-1.5 0-2.5-1t-1.1-2.6v-34.3q0-0.9 0.7-1.5t1.5-0.6h15q0.9 0 1.9 0.4t1.7 1.1l3.4 3.4q0.7 0.6 1.1 1.7t0.4 2v3.6z m-16.4 22.1v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m5.7 11.4v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m5.7 11.4v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m2.2-8.6v-5.7h-3.6q-0.9 0-1.5-0.7t-0.6-1.5v-3.5h-14.3v11.4h20z' })
                )
            );
        }
    }]);

    return FaFax;
}(React.Component);

exports.default = FaFax;
module.exports = exports['default'];