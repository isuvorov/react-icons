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

var MdSyncProblem = function (_React$Component) {
    _inherits(MdSyncProblem, _React$Component);

    function MdSyncProblem() {
        _classCallCheck(this, MdSyncProblem);

        return _possibleConstructorReturn(this, (MdSyncProblem.__proto__ || Object.getPrototypeOf(MdSyncProblem)).apply(this, arguments));
    }

    _createClass(MdSyncProblem, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.4 21.6v-10h3.2v10h-3.2z m16.6-15l-3.9 4c2.4 2.5 3.9 5.7 3.9 9.4 0 6.3-4.2 11.4-10 12.9v-3.4c3.9-1.4 6.6-5.1 6.6-9.5 0-2.7-1.1-5.2-2.8-7l-3.8 3.6v-10h10z m-16.6 21.8v-3.4h3.2v3.4h-3.2z m-13.4-8.4c0-6.2 4.2-11.4 10-12.9v3.5c-3.9 1.3-6.6 5-6.6 9.4 0 2.7 1.1 5.2 2.9 7l3.7-3.6v10h-10l3.9-4c-2.4-2.4-3.9-5.7-3.9-9.4z' })
                )
            );
        }
    }]);

    return MdSyncProblem;
}(React.Component);

exports.default = MdSyncProblem;
module.exports = exports['default'];