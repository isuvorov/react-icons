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

var FaBirthdayCake = function (_React$Component) {
    _inherits(FaBirthdayCake, _React$Component);

    function FaBirthdayCake() {
        _classCallCheck(this, FaBirthdayCake);

        return _possibleConstructorReturn(this, (FaBirthdayCake.__proto__ || Object.getPrototypeOf(FaBirthdayCake)).apply(this, arguments));
    }

    _createClass(FaBirthdayCake, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 31.4v8.6h-40v-8.6q1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.6-0.6 1.1-0.9t1.3-0.2 1.2 0.2 1.2 0.9q0.6 0.5 1 0.8t1.3 0.6 1.9 0.3q1.1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.5-0.5 0.7-0.6t0.7-0.4 1-0.1q0.8 0 1.3 0.2t1.1 0.9q0.6 0.5 1.1 0.8t1.3 0.6 1.9 0.3 1.9-0.3 1.3-0.6 1-0.8q0.7-0.6 1.2-0.9t1.2-0.2q0.8 0 1.3 0.2t1.1 0.9q0.7 0.5 1.1 0.8t1.3 0.6 1.9 0.3z m0-7.1v4.3q-0.8 0-1.2-0.3t-1.2-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1 0.9q-0.5 0.4-0.8 0.6t-0.6 0.3-1 0.2q-0.8 0-1.3-0.3t-1.1-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.4 0.4-0.7 0.6t-0.7 0.3-1 0.2q-0.7 0-1.2-0.3t-1.2-0.8q-0.6-0.6-1-0.9t-1.3-0.6-1.9-0.3q-1.1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.7 0.6-1.1 0.8t-1.3 0.3v-4.3q0-1.8 1.3-3t3-1.3h1.4v-10h5.7v10h5.7v-10h5.8v10h5.7v-10h5.7v10h1.4q1.8 0 3 1.3t1.3 3z m-28.6-19.3q0 1.7-0.8 2.6t-2 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.2-1.1t0.6-0.8 0.6-0.6 0.7-0.7 0.6-1 0.2-1.5q0.8 0 1.8 1.7t1 3.3z m11.5 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.3-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.8 0 1.9 1.7t1 3.3z m11.4 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.8-2q0-0.6 0.2-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.9 0 1.9 1.7t1 3.3z' })
                )
            );
        }
    }]);

    return FaBirthdayCake;
}(React.Component);

exports.default = FaBirthdayCake;
module.exports = exports['default'];